<template>
    <div class="box-language">
        <el-dropdown>
            <div>
                <template v-if="lang == 'en'">
                    <img 
                        src="/static/images/icons/usa.png" 
                        class="icon-drop-title"
                    >
                    EN 
                    <i 
                        class="el-icon-arrow-down el-icon--right" 
                        style="margin-left: 5px; margin-right: -10px;"
                    />
                </template>
                <template v-else-if="lang == 'ptbr'">
                    <img 
                        src="/static/images/icons/brazil.jpg" 
                        class="icon-drop-title"
                    >
                    PT-BR 
                    <i 
                        class="el-icon-arrow-down el-icon--right" 
                        style="margin-left: 5px; margin-right: -10px;"
                    />
                </template>
            </div>

            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item 
                    style="display: flex; align-items: center;" 
                    @click.native="modifyLocale('en')"
                >
                    <img 
                        src="/static/images/icons/usa.png" 
                        class="icon-drop"
                    >
                    EN
                </el-dropdown-item>
                <el-dropdown-item 
                    style="display: flex; align-items: center;" 
                    @click.native="modifyLocale('ptbr')"
                >
                    <img 
                        src="/static/images/icons/brazil.jpg" 
                        class="icon-drop"
                    >
                    PT-BR
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data: () => ({
            lang: ''
        }),

        mounted() {
            this.lang = this.$i18n.locale
        },

        methods: {
            modifyLocale(locale) {
                this.$i18n.locale = locale
                this.lang = locale
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './Language.scss';
</style>
