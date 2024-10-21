async function enviar(){
    const rota = "http://localhost:8080/gravador";
    
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = new FormData(document.querySelector("#formulario"));
        
        console.log(form.values([0]));
    });

    
    
    /*
    var form = new FormData(document.getElementById("formulario"));
        fetch(rota, {
            method: "POST",
            body: form,
            
        });
    */
    /*
    const formulario = document.querySelector("#formulario");
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        var formData = {
            nome: nome.value,
            idade: idade.value
        }

        const request = new Request (rota, {
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: formData,
        });

        const response = await fetch(request);
        
        console.log(response);
    });
    */
}