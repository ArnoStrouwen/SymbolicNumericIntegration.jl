using SymbolicUtils
using SymbolicUtils.Rewriters
# using SymbolicNumericIntegration

using PyCall
sympy = pyimport("sympy")

@syms x t 𝐞

r1 = @rule ^(𝐞, ~k) => exp(~k)
r2 = @rule 𝐞 => MathConstants.e

function convert_axiom(name::AbstractString)
    f = open(name, "r")
    r = r"\[.*\]"
    L = []

    for l in readlines(f)
        l = strip(l)
        m = match(r, l)
        if m != nothing
            l = replace(m.match, "%e" => 𝐞)
            l = replace(m.match, "%i" => im)
            try
                expr = Meta.parse(l)
                p = eval(expr)
                p[1] = Prewalk(PassThrough(Chain([r1,r2])))(p[1])
                p[4] = Prewalk(PassThrough(Chain([r1,r2])))(p[4])
                push!(L, p)
            catch e
            end
        end
    end

    close(f)
    return L
end

function convert_axiom(sym)
    name =
        if sym == :Apostle || sym == 1
            "Apostol Problems.input"
        elseif sym == :Bondarenko || sym == 2
            "Bondarenko Problems.input"
        elseif sym == :Bronstein || sym == 3
            "Bronstein Problems.input"
        elseif sym == :Charlwood || sym == 4
            "Charlwood Problems.input"
        elseif sym == :Hearn || sym == 5
            "Hearn Problems.input"
        elseif sym == :Hebisch || sym == 6
            "Hebisch Problems.input"
        elseif sym == :Jeffrey || sym == 7
            "Jeffrey Problems.input"
        elseif sym == :Moses || sym == 8
            "Moses Problems.input"
        elseif sym == :Stewart || sym == 9
            "Stewart Problems.input"
        elseif sym == :Timofeev || sym == 10
            "Timofeev Problems.input"
        elseif sym == :Welz || sym == 11
            "Welz Problems.input"
        elseif sym == :Wester || sym == 12
            "Wester Problems.input"
        end

        name = joinpath("test/0", name)
        println(name)
        return convert_axiom(name)
end

function test_point(complex_plane, radius)
    if complex_plane
        return radius * sqrt(rand()) * cis(2π*rand())
    else
        return Complex(radius * (2*rand() - 1))
    end
end

function accept_integral(sol, ans, x; radius=1.0, abstol=1e-3, n=5)
    try
        ϵ = zeros(n)
        for i = 1:n
            x₀ = test_point(true, radius)
            ϵ[i] = abs(substitute(sol - ans, Dict(x => x₀)))
        end
        return maximum(ϵ) - minimum(ϵ) < abstol
    catch e
    end
    return false
end

function test_axion(L, try_sympy=true; kwargs...)
    n_ok = 0
    n_fail = 0
    n_diff = 0
    n_catch = 0

    for p in L
        try
            eq = p[1]
            x = p[2]
            ans = p[4]

            printstyled(eq, '\n'; color=:green)
            sol = integrate(eq, x; kwargs...)[1]

            if isequal(sol, 0)
                printstyled("\tFailure\n"; color=:red)
                n_fail += 1
            elseif accept_integral(sol, ans, x)
                printstyled("\tSuccess:\t", sol, '\n'; color=:cyan)
                n_ok += 1
            else
                printstyled("\tDiscrepancy:\t", sol, '\n'; color=:yellow)
                n_diff += 1
            end

            if try_sympy
                s = pythonize(eq)
                py = sympy.integrate(s, sympy.Symbol(string(x)))
                printstyled("\tSymPy      :\t", string(py)[10:end], '\n'; color=:magenta)
            end

            printstyled("\tAnswer: \t", ans, '\n'; color=:blue)
        catch e
            printstyled(e, '\n'; color=:red)
            n_catch += 1
        end
    end

    println()
    printstyled("Success     = ", n_ok, '\n'; color=:green)
    printstyled("Failure     = ", n_fail, '\n'; color=:red)
    printstyled("Discrepancy = ", n_diff, '\n'; color=:yellow)
    printstyled("Exception   = ", n_catch, '\n'; color=:cyan)
end

#############################################################################

pythonize(eq::SymbolicUtils.Add) = "(" * join(pythonize.(arguments(eq)), ")+(") * ")"
pythonize(eq::SymbolicUtils.Mul) = "(" * join(pythonize.(arguments(eq)), ")*(") * ")"

function pythonize(eq::SymbolicUtils.Pow)
    a = pythonize.(arguments(eq))
    "(" * a[1] * ")**(" * a[2] * ")"
end

pythonize(eq::SymbolicUtils.Term) = string(operation(eq)) * '(' * pythonize(arguments(eq)[1]) * ')'

function pythonize(eq)
    s = string(eq)
    s = replace(s, "π" => "pi")
    s = replace(s, "im" => "j")
    s
end
