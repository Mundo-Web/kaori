<?php

namespace App\Http\Controllers;

use App\Models\Aboutus;
use App\Models\General;
use App\Models\Strength;
use App\Models\Testimony;
use Illuminate\Http\Request;

class AboutController extends BasicController
{
    public $reactView = 'About';
    public $reactRootView = 'public';

    public function setReactViewProperties(Request $request)
    {
        $testimonies = Testimony::where('status', true)->where('visible', true)->get();
        $aboutus = Aboutus::all();
        $strengths = Strength::where('status', true)->where('visible', true)->get();


        return [
            'testimonies' => $testimonies,
            'aboutus' => $aboutus,
            'strengths' => $strengths
        ];
    }
}