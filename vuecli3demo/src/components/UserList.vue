<template>
    <div>
        <div width="50%" align="right">
            <!-- Form -->
            <el-button type="primary" icon="el-icon-edit" size="small" align="right"
                       @click="form={};dialogFormVisible = true">新增用户
            </el-button>

        </div>
        <el-table
                :data="userList"
                style="width: 100%">

            <el-table-column
                    label="序号"
            >
                <template slot-scope="scope">
                    <i class="el-icon-s-data"></i>
                    <span style="margin-left: 10px">{{ scope.$index }}</span>
                </template>
            </el-table-column>

            <el-table-column
                    label="姓名"
            >
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.age }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>

            <el-table-column
                    label="年龄"
            >
                <template slot-scope="scope">
                    <i class="el-icon-eleme"></i>
                    <span style="margin-left: 10px">{{ scope.row.age }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="show(scope.row.id);dialogFormVisible = true">更新
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="remove(scope.$index)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog title="用户保存" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input v-model="form.age" autocomplete="off" placeholder="请输入年龄"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save();dialogFormVisible = false">保存</el-button>
            </div>
        </el-dialog>


    </div>


</template>


<script>
    import _ from 'underscore';

    export default { //导出  外部使用
        name: "UserList",
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                showAddForm: false,
                userList: [{
                    id: 0,
                    name: '张三',
                    age: 123
                }, {
                    id: 1,
                    name: '李四',
                    age: 123
                }, {
                    id: 2,
                    name: '王五',
                    age: 123
                }, {
                    id: 3,
                    name: '赵六',
                    age: 123
                }]

            }
        },
        methods: {

            //用于生成uuid
            createUUID: function () {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                )
            },

            //保存
            save: function () {
                if (this.form.id != undefined) {
                    //更新
                    this.update();
                } else {
                    //添加
                    this.add();
                }
            },
            //添加用户
            add: function () {
                this.form.id = this.createUUID();
                this.userList.push({
                    id: this.form.id,
                    name: this.form.name,
                    age: this.form.age
                });
            },
            //删除用户
            remove: function (index) {
                this.userList.splice(index, 1);
            },
            //回显用户数据
            show: function (userId) {
                this.form = _.filter(this.userList, user => {
                    return user.id == userId
                })[0];
            },
            //更新用户
            update: function () {
                var index = _.findIndex(this.userList, {
                    "id": this.form.id
                });
                this.userList[index].name = this.form.name;
                this.userList[index].age = this.form.age;
            }
        }
    }

</script>
<style>
</style>