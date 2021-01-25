<?php

use App\Models\Branch;
use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class AddFkBranchUsersAndData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Branch::create([
            'name' => 'Empresa',
        ]);

        Branch::create([
            'name' => 'Fornecedor',
        ]);

        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('branch_id');

            $table->foreign('company_id')
                ->references('id')
                ->on('companies');

            $table->foreign('branch_id')
                ->references('id')
                ->on('branches');
        });

        Company::create([
            'razao_social' => 'AdminCompany',
            'branch_id' => 1
        ]);

        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'system_profile_id' => 1,
            'password' => Hash::make('123mudar'),
            'company_id' => 1,
            'branch_id' => 1
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_branch_id_foreign');
            $table->dropForeign('users_company_id_foreign');
        });
    }
}
