import type { ObjectDirective, DirectiveBinding } from 'vue';

// lo que esta dendro de <--> depende de que elemento se ocupa
export const colorTextDirective: ObjectDirective<HTMLElement> = {
  mounted: (element: HTMLElement, binding: DirectiveBinding) => {
    element.style.color = binding?.value;
  },
};
