<template>
  <aisde class="nmenu" v-show="isMenuVisible">
    <div class="menu-filter">
        <i class="fa fa-search fa-lg"></i>
        <input type="text" placeholder="Digite para filtrar..."
            v-model="treeFilter" class="filter-field">
    </div>
    <Tree :data="treeData" :options="treeOptions"
        :filter="treeFilter" ref="tree" />
  </aisde>
</template>

<script>
import { mapState } from 'vuex'
import Tree from 'liquor-tree'
import { baseApiUrl } from '../../config/global'
import axios from 'axios'

export default {
    name: 'NMenu',
    components: { Tree },    
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: { emptyText: 'categoria não encontrada' }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node) {
            this.$router.push({
                name: 'articlesByCategory',
                params: { id: node.id}
            })
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }
}
</script>

<style>
    .nmenu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .nmenu a,
    .nmenu a:hover {
        color: #fff;
    }

    .nmenu .tree-node.selected > .tree-content,
    .nmenu .tree-node .tree-content:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .tree-arrow.has-child {
        filter: brightness(2);
    }

    .nmenu .nmenu-filter {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #aaa;
    }

    .nmenu .nmenu-filter i {
        color: #aaa;
        margin-right: 10px;
    }

    .nmenu input {
        color: #ccc;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }

    .tree-filter-empty {
        color: #ccc;
        font-size: 1.3rem;
        margin-left: 20px;
    }
</style>