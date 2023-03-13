<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stack;

class StackController extends Controller
{
    // Store a new object on top of the array of objects in stack db
    public function store(Request $request)
    {
        try
        {
           $strName = $request->get('strName');

           Stack::create([
            'random_str'   => $strName,
           ]);

           return response()->json([
            'random_str'   => $strName,
        ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }   
    }

    public function getTopObj()
    {
        try
        {
           $lastStack = Stack::orderBy('id', 'DESC')->first();
           return response()->json($lastStack);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
