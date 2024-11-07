<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\WebDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends BasicController
{
    public $reactView = 'Blog';
    public $reactRootView = 'public';

    public function setReactViewProperties(Request $request)
    {
        $categories = Category::select([
            DB::raw('DISTINCT(categories.id)'),
            'categories.name'
        ])
            ->join('posts', 'posts.category_id', 'categories.id')
            ->where('categories.visible', true)
            ->where('categories.status', true)
            ->get();
        $details = WebDetail::where('page', 'blog')->get();
        return [
            'categories' => $categories,
            'details' => $details
        ];
    }
}
