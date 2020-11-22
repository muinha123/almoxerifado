<template>
    <div>
        <div class="page-breadcrumb">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-xs-12 align-self-center">
                    <h5 class="font-medium text-uppercase mb-0">Lista de Usuarios</h5>
                </div>
                <div class="col-lg-9 col-md-8 col-xs-12 align-self-center">
                    <nav aria-label="breadcrumb" class="mt-2 float-md-right float-left">
                        <ol class="breadcrumb mb-0 justify-content-end p-0">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Lista de Usuarios</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <div style="margin: 5px 0px 35px 0px;">
                        <router-link :to="{name: 'admin.user.create'}" class="btn btn-success btn-lg text-white">Criar Usuário<i style="margin-left: 10px;" class="fa fa-plus"></i> </router-link>
                    </div>
                    <table id="demo-foo-row-toggler" class="table table-striped footable footable-1 breakpoint breakpoint-lg" data-toggle-column="first" style="">
                        <thead>
                            <tr class="footable-header">
                                <th>Nome</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Ultimo Acesso</th>
                                <th class="text-center">Perfil Do Sístema</th>
                                <th class="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    <a href="">
                                        <img src="/imagens/user-perfil-padrao.jpeg" alt="user" width="40" class="rounded-circle">
                                        muinha
                                    </a>
                                </td>
                                <td  class="text-center">teste@teste</td>
                                <td  class="text-center">15/02/2020</td>
                                <td  class="text-center">Admnistrador</td>
                                <td  class="text-center">
                                    <a href="" class="btn btn-primary btn-circle btn-sm"><i class="fa fa-user"></i> </a>
                                    <a href="" class="btn btn-info btn-circle btn-sm"><i class="fa fa-edit"></i> </a>
                                    <a href="" class="btn btn-danger btn-circle btn-sm"><i class="fa fa-trash"></i> </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({

        }),
        methods: {
            get: function () {
                axios.get('/api/users').then(function (resp) {
                    console.log(resp.data);
                }).catch(error => console.log(error))
            }
        },
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>

</style>
