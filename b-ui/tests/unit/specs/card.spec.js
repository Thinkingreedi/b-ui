import { mount } from '@vue/test-utils'
import card from '../../../components/lib/card/src/main.vue'

describe('测试card组件', () => {
  const wrapper = mount(card,{
    propsData: {
      summary: '这是一个card组件'
    }
  }
)
   // 也便于检查已存在的元素
   it('测试是否存在一个img标签', () => {
    expect(wrapper.find('img').exists()).toBe(true)
  })

   it('测试是否加上summary描述',()=>{
    expect(wrapper.html()).toContain('这是一个card组件')
   })
})
