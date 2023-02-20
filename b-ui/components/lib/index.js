import Card from './card'
import Demo from './demo'
import Button from './button'
import Icon from './icon'
import Radio from './radio'
import RadioGroup from './radio-group'
import Checkbox from './checkbox'
import CheckBoxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Pagination from './pagination'

const components = {
  Card,
  Demo,
  Button,
  Icon,
  Radio,
  RadioGroup,
  Checkbox,
  CheckBoxGroup,
  Form,
  FormItem,
  Input,
  Pagination
}

const install = function (Vue) {
  if(install.installed) return;
  Object.keys(components).forEach(key=>{
    Vue.component(components[key].name, components[key])
  })
  
}

const API = { install }

export default API;
export {
  Demo,
  Card,
  Button,
  Icon,
  Radio,
  RadioGroup,
  Checkbox,
  CheckBoxGroup,
  Form,
  FormItem,
  Input,
  Pagination
}