<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ActualizarlicenciaturaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "codigo" => "required|unique:licenciaturas,codigo".$this->route('licenciatura')->codigo,
            "carrera" => "required",
            "descripcion" => "required",
            "codigo" => "required",
            "duracion" => "required",
            "asignaturas" => "required",
            "uv" => "required"
        ];
    }
}
