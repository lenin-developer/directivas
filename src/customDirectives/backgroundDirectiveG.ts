import { Directive, DirectiveBinding } from 'vue';

export const backgroundDirective: {
  name: string;
  logic: Directive<HTMLElement, DirectiveBinding>;
} = {
  name: 'background',
  logic: (element: HTMLElement, binding: DirectiveBinding) => {
    element.style.background = binding.value;
  },
};
