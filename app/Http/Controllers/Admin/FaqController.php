<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BasicController;
use App\Models\Faq;
use App\Http\Requests\StoreFaqRequest;
use App\Http\Requests\UpdateFaqRequest;
use Illuminate\Http\Request;

class FaqController extends BasicController
{
    public $model = Faq::class;
    public $reactView = 'Admin/Faqs';

    public function setReactViewProperties(Request $request)
    {
        return [];
    }
}