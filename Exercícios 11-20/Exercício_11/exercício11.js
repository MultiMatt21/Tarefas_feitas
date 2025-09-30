 btn.addEventListener('click', function(){
            let nome = prompt('Digite seu nome')
            let idade = prompt('Digite sua idade')
            console.log(`Meu nome é ${nome} e minha idade é ${idade}`)
            document.getElementById('resposta').innerHTML = `Meu nome é ${nome} e minha idade é ${idade}`

        })