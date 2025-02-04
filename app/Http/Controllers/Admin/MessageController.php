<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BasicController;
use App\Models\Message;
use App\Models\WebDetail;
use Illuminate\Http\Request;

class MessageController extends BasicController
{
   public $model = Message::class;
   public $reactView = 'Admin/Messages';

   public function setReactViewProperties(Request $request)
   {
      $details = WebDetail::where('page', 'messages')->get();
      return [
         'details' => $details
      ];
   }

   public function setPaginationInstance(string $model)
   {
      return $model::where('status', true);
   }
}
