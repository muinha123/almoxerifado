<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'razao_social',
        'cep',
        'address',
        'street',
        'branch_id',
        'city',
        'uf',
        'description',
        'complement',
        'url',
        'number'
    ];
}
