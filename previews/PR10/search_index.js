var documenterSearchIndex = {"docs":
[{"location":"#SymbolicNumericIntegration.jl","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.jl","text":"","category":"section"},{"location":"","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.jl","text":"Documentation for SymbolicNumericIntegration.jl","category":"page"},{"location":"","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.jl","text":"Modules = [SymbolicNumericIntegration]","category":"page"},{"location":"#SymbolicNumericIntegration.collect_powers-Tuple{Any, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.collect_powers","text":"collect_powers separates the powers of x in eq (a polynomial) and returns\na dictionary of power => term\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.deg-Tuple{SymbolicUtils.Add, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.deg","text":"deg(p) returns the degree of p if p is a polynomial\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.find_independent_subset-Tuple{Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.find_independent_subset","text":"returns a list of the indices of a linearly independent subset of the columns of A\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.integrate","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.integrate","text":"integrate is the main entry point\n\ninput:\n------\neq: a Symbolics expression to integrate\nx: the independent variable (optional)\n\nabstol: the desired tolerance\nnum_steps: the number of different steps with expanding basis to be tried\nnum_trials: the number of trials in each step (no changes to the basis)\nradius: the radius of the disk in the complex plane to generate random test points\nshow_basis: if true, the basis (list of candidate terms) is printed\nopt: the sparse regression optimizer\nbypass: if true, do not integrate terms separately but consider all at once\nsymbolic: try symbolic integration first\nmax_basis: the maximum number of candidate terms to consider\nverbose: print a detailed report\ncomplex_plane: generate random test points on the complex plane (if false, the points will be on real axis)\nhomotomy: use the homotopy algorithm to generat the basis\n\noutput:\n-------\nsolved, unsolved, err\n\nsolved is the solved integral and unsolved is the residual unsolved portion of the input\nerr is the numerical error in reaching the solution\n\n\n\n\n\n","category":"function"},{"location":"#SymbolicNumericIntegration.integrate_sum-Tuple{Any, Any, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.integrate_sum","text":"integrate_sum applies the integral summation rule ∫ Σᵢ fᵢ(x) dx = Σᵢ ∫ fᵢ(x) dx\n\neq: the integrand\nx: the indepedent variable\nl: a logger\n\noutput is the same as integrate\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.integrate_term-Tuple{Any, Any, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.integrate_term","text":"integrate_term is the central part of the code that tries different\nmethods to integrate eq\n\neq: the integrand\nx: the indepedent variable\nl: a logger\n\noutput is the same as integrate\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.is_number-Tuple{T} where T<:Integer","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.is_number","text":"is_number(x) returns true if x is a concrete numerical type\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.isdependent-Tuple{Any, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.isdependent","text":"isdependent returns true if eq is dependent on x\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.nice_parameters-Tuple{Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.nice_parameters","text":"converts float to int or small rational numbers\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.solve_newton-NTuple{6, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.solve_newton","text":"solve_newton is a symbolic Newton-Ralphson solver\nf is a symbolic equation to be solved (f ~ 0)\nx is the variable to solve\nx₀ is the initial guess\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.try_integrate-NTuple{6, Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.try_integrate","text":"the core of the randomized parameter-fitting algorithm\n\n`try_integrate` tries to find a linear combination of the basis, whose\nderivative is equal to eq\n\noutput\n-------\nintegral, error\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicNumericIntegration.var-Tuple{Any}","page":"SymbolicNumericIntegration.jl","title":"SymbolicNumericIntegration.var","text":"var(p) returns the unique variable of an expression (is exists)\n\n\n\n\n\n","category":"method"}]
}