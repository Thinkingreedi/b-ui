import { mount } from '@vue/test-utils'
import button from '../../../components/lib/button/src/main.vue'

describe('测试button组件', () => {
  const wrapper = mount(button,{
    propsData: {
      type: 'primary'
    }
  }
)
   // 也便于检查已存在的元素
   it('测试是否存在一个按钮', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
    // 断言触发的事件
    it('断言触发事件后的结果', async () => {
      wrapper.vm.$emit('foo')
      // 断言事件已经被触发
      expect(wrapper.emitted().foo). toBeTruthy()
    })

   it('测试是否加上primary类名',()=>{
    expect(wrapper.classes()).toContain("b-button--primary");
   })
})
