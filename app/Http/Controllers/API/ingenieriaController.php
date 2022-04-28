<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ingenieria;

class ingenieriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ingenieria = ingenieria::all();
        return $ingenieria;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ingenieria = new ingenieria();
        $ingenieria->codigo = $request->codigo;
        $ingenieria->carrera = $request->carrera;
        $ingenieria->descripcion = $request->descripcion;
        $ingenieria->carrera = $request->carrera;
        $ingenieria->duracion = $request->duracion;
        $ingenieria->asignaturas = $request->asignaturas;
        $ingenieria->uv = $request->uv;

        $ingenieria->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ingenieria = ingenieria::find($id);
        return $ingenieria;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ingenieria = ingenieria::findOrFail($request->id);
        $ingenieria->codigo = $request->codigo;
        $ingenieria->carrera = $request->carrera;
        $ingenieria->descripcion = $request->descripcion;
        $ingenieria->carrera = $request->carrera;
        $ingenieria->duracion = $request->duracion;
        $ingenieria->asignaturas = $request->asignaturas;
        $ingenieria->uv = $request->uv;

        $ingenieria->save();
        return $ingenieria;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ingenieria = ingenieria::destroy($id);
        return $ingenieria;
    }
}
