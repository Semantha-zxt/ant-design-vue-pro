<template>
    <div>
        <Header></Header>
        <SiderMenu></SiderMenu>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu'
export default {
    components: {
        Header,
        SiderMenu,
        Footer
    }
    
}
</script>

