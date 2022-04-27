<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\GuardarlicenciaturaRequest;
use App\Http\Requests\ActualizarlicenciaturaRequest;
use Illuminate\Http\Request;
use App\Models\licenciatura;

class licenciaturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return licenciatura::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GuardarlicenciaturaRequest $request)
    {
        licenciatura::create($request->all());
        return response()->json([
            'res' => true,
            'msg' => 'carrera guardad correctamente'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(licenciatura $licenciatura)
    {
        return response()->json([
            'licenciatura' => $licenciatura
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ActualizarlicenciaturaRequest $request, licenciatura $licenciatura)
    {
        $licenciatura->update($request->all());
        return response()->json([
            'res' => true,
            'mensaje'=> 'Carrera actualizada correctamente'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(licenciatura $licenciatura)
    {
        $licenciatura->delete();
        return response()->json([
            'res' => true,
            'mensaje'=> 'Carrera eliminada correctamente'
        ],200);
    }
}
