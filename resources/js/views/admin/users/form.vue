<template>
    <div>
        <div class="page-breadcrumb bg-light">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-xs-12 align-self-center">
                    <h5 class="font-medium text-uppercase mb-0 text-center">Criar Usuário</h5>
                </div>
                <div class="col-lg-9 col-md-8 col-xs-12 align-self-center">
                    <nav aria-label="breadcrumb" class="mt-2 float-md-right float-left">
                        <ol class="breadcrumb mb-0 justify-content-end p-0 bg-light">
                            <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Criar Usuário</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="card">
            <form id="form_admin_create_users" enctype="multipart/form-data" method="POST" action="" class="form pt-3">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <div class="el-element-overlay">
                            <div class="el-card-item">
                                <img style="height: 400px;" class="img-thumbnail" src="/imagens/user-perfil-padrao.jpeg" alt="user">
                            </div>
                        </div>
                        <div style="width: 100%;" class="btn btn-info waves-effect waves-light">
                            <span>Carregar Imagem Perfil</span>
                            <input value="" name="image_user" id="image_user" type="file" class="upload">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input value=""  id="name" name="name" type="text" class="form-control" placeholder="Digite seu nome">
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input value="" id="email" name="email" type="email" class="form-control" placeholder="Digite seu e-mail">
                        </div>
                        <div class="form-group">
                            <label for="system_profile">Perfil do Sístema</label>
                            <select class="form-control" name="system_profile_id" id="system_profile">
                                <option value="">teste</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input value=""   id="password" name="password" type="password" class="form-control" placeholder="Digite seu password">
                        </div>
                    </div>
                    <div class="col-md-12 form-group mt-3">
                        <a href="" class="btn btn-dark">Cancelar</a>
                        <button type="submit" class="btn btn-success mr-2">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
