<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class licenciatura extends Model
{
    use HasFactory;

    protected $fillable = [
        'codigo',
        'carrera',
        'descripcion',
        'duracion',
        'asignaturas',
        'uv'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
