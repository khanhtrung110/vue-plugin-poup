import { createApp } from 'vue';
import ConfirmPopup from './ConfirmPopup.vue'
import mitt from '../mitt';
export default {
    install: (app) => {
        let comp:any = null;
        let defaults = {
            yesText: "YES",
            noText: "NO",
            message: "",
            type: "warning",
        };
        const createComp = (options:Object) => {
            const div = document.createElement('div');
            document.querySelector('body').appendChild(div);
            app.component('ConfirmPopup', ConfirmPopup);
            const Component = createApp(app.component('ConfirmPopup'), Object.assign(defaults,options));
            Component.mount(div);
            return Component;
        }
        const init = (options:Object) => {
            return new Promise((resolve , reject) => {
                comp = createComp(options);
                mitt.on("close", () => {
                    reject({isSave : false});
                    comp.unmount();
                });
                mitt.on("save", () => {
                    resolve({isSave : true});
                    comp.unmount();
                });
            })
        } 

        app.provide('useNotify',(options: Object) => init(options))
    },
  };