import { camelCase } from 'lodash';
import App from './App.svelte';
import './style.css';

console.log(camelCase('hello world'));

const app = new App({
  target: document.body,
  props: {
    name: 'Myriam',
  },
});

export default app;
