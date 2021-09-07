const texto = `CPF Gos Aprovados:
	-865.571.340-60
	-950.978.230-01
	-342.820.280-50
	-952.095.220-91
	-179.063.940-97`


console.log(texto.match(/\d{3}.\d{3}.\d{3}-\d{2}/g))