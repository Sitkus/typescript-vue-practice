import { shallowMount } from '@vue/test-utils';
import MoneyCounter from '../MoneyCounter.vue';

describe('MoneyCounter.vue', () => {
    test('render text with current money', () => {
        const wrapper = shallowMount(MoneyCounter);
        const h5 = wrapper.find('h5');

        expect(h5.text()).toBe(`Money counter: ${wrapper.vm.money}`);
    });

    test('increments money by one', async () => {
        expect.assertions(1);
        const wrapper = shallowMount(MoneyCounter);
        const incrementBtn = wrapper.find('[data-testid="btn-increment"]');

        await incrementBtn.trigger('click');

        expect(wrapper.vm.money).toBe(11);
    });

    test('decrements money by one', async () => {
        expect.assertions(1);
        const wrapper = shallowMount(MoneyCounter);
        const decrementBtn = wrapper.find('[data-testid="btn-decrement"]');

        await decrementBtn.trigger('click');

        expect(wrapper.vm.money).toBe(9);
    });

    test('logs and does not decrement below zero', async () => {
        expect.assertions(2);
        const spy = jest.spyOn(window.console, 'log');
        const wrapper = shallowMount(MoneyCounter);
        await wrapper.setData({
            money: 0
        });
        const decrementBtn = wrapper.find('[data-testid="btn-decrement"]');

        await decrementBtn.trigger('click');

        expect(wrapper.vm.money).toBe(0);
        expect(spy).toHaveBeenCalledWith('Maaan you are at zero already!');
    });
});
