<?php

namespace App\Http\Controllers;

use App\Models\General;
use App\Models\WebDetail;
use Illuminate\Http\Request;

class ContactController extends BasicController
{
    public $reactView = 'Contact';
    public $reactRootView = 'public';

    public function setReactViewProperties(Request $request)
    {
        $generals = General::all();
        $details = WebDetail::whereIn('page', ['messages'])->get();
        return [
            'generals' => $generals,
            'details' => $details
        ];
    }
}
