<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class licenciaturaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('licenciaturas')->insert([
        	[
	        	'codigo' => '102',
	        	'carrera' => 'Teologia Pastoral',
	        	'descripcion' => 'hey',
	        	'duracion' => '10 ciclos',
	        	'asignaturas' => '33',
	        	'uv' => '171 uv',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
        	]
        	
        ]);
    }
}
