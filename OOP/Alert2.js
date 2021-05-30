class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        // для унаследования свойств надо использовать  super
        super(a, c, d);
        this.icon = icon; // new proper
    }
    // можно вызвать еще раз супер и работать с ним, или вызвать новый метод 
    showIconAlert() {
        document.querySelector(this.out).innerHTML =
            `<p class="${this.cssClass}"><span class="material-icons">${this.icon}</span>${this.messege}</p>`;
    }
}