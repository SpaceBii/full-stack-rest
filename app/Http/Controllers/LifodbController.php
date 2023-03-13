<?php

namespace App\Http\Controllers;

use App\Models\Lifodb;
use Illuminate\Http\Request;

class LifodbController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try
        {
           $lifos = Lifodb::orderBy('id', 'DESC')->get();
           return response()->json($lifos);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }
    /**
     * Display the specified resource.
     */
    public function show(lifodb $lifodb)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(lifodb $lifodb)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, lifodb $lifodb)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(lifodb $lifodb)
    {
        //
    }
}
