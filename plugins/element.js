import Vue from 'vue'
import { 
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Header,
    Main,
    Aside,
    Container,
    MenuItem,
    Menu,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox,
    Tag,
    Tree,
    Select,
    Option,
    DropdownItem,
    Dropdown,
    DropdownMenu,
    Checkbox,
 } from 'element-ui'
 Vue.use(Tag)
 Vue.use(Tree)
 Vue.use(Select)
 Vue.use(Option)
 Vue.use(DropdownItem)
 Vue.use(Dropdown)
 Vue.use(DropdownMenu)
 Vue.use(Checkbox)

 Vue.use(Table)
 Vue.use(TableColumn)
 Vue.use(Switch)
 Vue.use(Tooltip)
 Vue.use(Pagination)
 Vue.use(Dialog)


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm

