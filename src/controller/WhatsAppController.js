class WhatsAppController {

    constructor() {
        this.loadElements();
        this.elementsPrototype();
        this.initEvents();

    }

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;
        });
    }
    /*
    * O método prototype em JavaScript é uma forma de adicionar propriedades
    * e métodos a objetos de um tipo específico, como funções construtoras 
    * (ou classes, no ES6+). 
    * Ele é uma parte essencial do sistema de herança prototípica do JavaScript.
    */

    elementsPrototype() {

        //usamos o function pra que aconteça apenas aqui dentro

        Element.prototype.hide = function () {
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function () {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function () {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function (events, fn) {
            //Como mandamos por string, vamos separar por espaço os eventos
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
            return this;
        }

        Element.prototype.css = function (styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function (name) {
            return this.classList.contains(name);

        }

        HTMLFormElement.prototype.getForm = function () {

            return new FormData(this);
        }

        HTMLFormElement.prototype.toJson = function () {

            let json = {};

            this.getForm().forEach( (value, key) => {

                json [key] = value;

            });

            return json;

        }

    }

    initEvents() {

        this.el.myPhoto.on('click', e => {
            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            
            setTimeout(()=>{
                this.el.panelEditProfile.addClass('open');
            }, 300);

        });

        this.el.btnClosePanelEditProfile.on('click', e => {

            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            this.el.panelEditProfile.removeClass('open');

        });


        this.el.btnNewContact.on('click', e => {

            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            setTimeout(()=>{
                this.el.panelAddContact.addClass('open');
            }, 300);
            
        });

        this.el.btnClosePanelAddContact.on('click', e=>{

            this.el.panelAddContact.removeClass('open');
        });


        this.el.photoContainerEditProfile.on(('click'), e => {

            this.el.inputProfilePhoto.click();

        });

        this.el.inputNamePanelEditProfile.on('keypress', e => {
            
            if(e.key === 'enter'){

                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();
            }
        });

        this.el.btnSavePanelEditProfile.on('click', e =>{

            console.log(this.el.inputNamePanelEditProfile.innerHTML);
        });

        this.el.formPanelAddContact.on('submit', e=> {

            e.preventDefault();//não dá refresh na tela

            let formData = new FormData(el.formPanelAddContact);
        })


        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item => {

            item.on('click', e => {

                this.el.home.hide();
                this.el.main.css({
                    display:'flex'
                })
            });
        })

        this.el.btnAttach.on('click', e => {

            this.el.menuAttach.addClass('open');
            document.addEventListener('click', () => {
                
            });
            
        });

        this.el.btnAttachPhoto.on('click', e => {
            console.log('clicou');
        });

        this.el.btnAttachContact.on('click', e => {
            console.log('clicou');
        });

        this.el.btnAttachDocument.on('click', e => {
            console.log('clicou');
        });

        this.el.btnAttachCamera.on('click', e => {
            console.log('clicou');
        });
        
    }

    closeMenuAttach(e){

    }

    closeAllLeftPanel(){
        //fechar todos os paineis para não ficar um em cima do outro

        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();

    }
}