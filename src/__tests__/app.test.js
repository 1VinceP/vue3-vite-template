import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('app', () => {
   it('should render', () => {
      const wrapper = shallowMount(App);
      expect(wrapper).toBeTruthy();
   });
});
