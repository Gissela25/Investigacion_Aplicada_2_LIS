<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableTecnicos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_tecnicos', function (Blueprint $table) {
            $table->id();
            $table->string('codigo',3)->unique();
            $table->string('carrera');
            $table->string('descripcion');
            $table->string('duracion');
            $table->string('asignaturas');
            $table->string('uv');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_tecnicos');
    }
}
