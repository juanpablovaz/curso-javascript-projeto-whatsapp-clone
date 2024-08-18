class WhatsAppController {

    constructor(){
        console.log('WhatsAppController ok')
        this.loadElements();
        this.elementsPrototype();
        
    }

    loadElements(){
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;
        });
    }

    elementsPrototype(){
        
    }
}