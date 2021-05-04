var app = new Vue({
    el: '#app',
    data: {
        formFields: {
            labels: ['Cateto Oposto', 'Cateto Adjacente'],
            descriptions: ['Digite o valor do cateto oposto', 'Digite o valor do cateto adjacente']
        },
        picked: 'Hipotenusa',
        field1: null,
        field2: null,
        result: '-',
    },
    methods: {
        setLabels() {
            if (this.picked == 'Hipotenusa') {
                this.formFields.labels = ['Cateto Oposto', 'Cateto Adjacente']
                this.formFields.descriptions = ['Digite o valor do cateto oposto', 'Digite o valor do cateto adjacente']
            } else {
                this.formFields.labels = ['Cateto', 'Hipotenusa']
                this.formFields.descriptions = ['Digite o valor do cateto', 'Digite o valor da hipotenusa']
            }
            this.calculate()
        },

        calculate() {
            if (this.field1 && this.field2) {
                if (this.picked == 'Hipotenusa') {
                    this.result = this.calculateHypotenuse()
                } else {
                    this.result = this.calculateSide()
                }
            }
        },

        calculateHypotenuse() {
            return Math.sqrt(Math.pow(this.field1, 2) + Math.pow(this.field2, 2))
        },

        calculateSide() {
            if(this.field2>=this.field1){
                return Math.sqrt(Math.pow(this.field2, 2) - Math.pow(this.field1, 2))
            }else{ 
                return 'O valor da hipotenusa não pode ser inferior ao do cateto'
            }
            
        },

        clearFields() {
            this.field1 = this.field2 = null
            this.result = '-'
        },

        copyResultToClipboard() {
            let r = document.createRange()
            r.selectNode(document.getElementById('result'))
            window.getSelection().removeAllRanges()
            window.getSelection().addRange(r)
            document.execCommand('copy')
            window.getSelection().removeAllRanges()
            swal({
                title: `📄 Resultado "${this.result}" copiado.`,
                text: `O valor está na Área de Transferência.`,
                timer: 2000,
                showConfirmButton: false
            });
        },

    }
})
