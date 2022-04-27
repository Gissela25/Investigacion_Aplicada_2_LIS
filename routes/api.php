<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\licenciaturaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/licenciaturas',[licenciaturaController::class,'index']);
Route::post('/licenciaturas/create',[licenciaturaController::class,'store']);
Route::get('/licenciaturas/search/{licenciatura}',[licenciaturaController::class,'show']);
Route::put('/licenciaturas/edit/{licenciatura}',[licenciaturaController::class,'update']);
Route::delete('/licenciaturas/{licenciatura}',[licenciaturaController::class,'destroy']);