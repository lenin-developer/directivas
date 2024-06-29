import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { backgroundDirective } from './customDirectives/backgroundDirectiveG.ts';

const app = createApp(App);

// app.directive('background', (el: HTMLAreaElement, binding: any) => {
//   el.style.background = binding.value;
// });
app.directive(backgroundDirective.name, backgroundDirective.logic);

app.mount('#app');
