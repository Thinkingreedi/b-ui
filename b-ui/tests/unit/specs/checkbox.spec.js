import { mount } from '@vue/test-utils'
import checkbox from '../../../components/lib/checkbox/src/main.vue'

describe('测试checkbox组件', () => {
  const wrapper = mount(checkbox)
   // 也便于检查已存在的元素
   it('测试是否存在一个span标签', () => {
    expect(wrapper.find('span').exists()).toBe(true)
  })

})
