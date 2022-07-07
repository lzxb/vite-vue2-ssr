import { createRenderer } from 'vue-server-renderer';
import { createApp } from './main'

export async function render () {
    const renderer = createRenderer({ 
        inject: true
     })
     const ctx = {
        _registeredComponents: new Set()
     };
    const html = await renderer.renderToString(createApp(), ctx);
    return html;

}