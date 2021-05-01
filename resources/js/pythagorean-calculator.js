var app = new Vue({
    el: '#app',
    data: {
        formFields: {
            labels:['Cateto Oposto', 'Cateto Adjacente'], 
            descriptions: ['Digite o valor do cateto oposto','Digite o valor do cateto adjacente']
        },
        picked: 'Hipotenusa',
        field1: null,
        field2: null,
        result: '-',
    },
    methods: {
        calculationType() {
            if (this.picked == 'Hipotenusa') {
                this.formFields.labels = ['Cateto Oposto', 'Cateto Adjacente']
                this.formFields.descriptions = ['Digite o valor do cateto oposto','Digite o valor do cateto adjacente']
            } else {
                this.formFields.labels = ['Cateto', 'Hipotenusa']
                this.formFields.descriptions = ['Digite o valor do cateto','Digite o valor da hipotenusa']
            }
            this.calculate()
        },

        calculate() {
            if (this.field1 && this.field2) {
                if (this.picked == 'Hipotenusa') {
                    this.result = this.calcultateHypotenuse()
                } else {
                    this.result = this.calculateSide()
                }
            }
        },

        calcultateHypotenuse() {
            return Math.sqrt(Math.pow(this.field1, 2) + Math.pow(this.field2, 2))
        },

        calculateSide() {
            return Math.sqrt(Math.pow(this.field2, 2) - Math.pow(this.field1, 2))
        },

        clearFields() {
            this.field1 = this.field2 = null
            this.result = '-'
        }

    }
})
