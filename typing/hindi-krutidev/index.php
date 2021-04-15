<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Hindi(KrutiDev) Typing Test</title>

</head>
<style>
    html {
        scroll-behavior: smooth;
    }

    @font-face {
        font-family: hindi;
        src: url(Kruti_Dev_010.ttf);
    }
</style>

<body>




    <div class="container option">
        <div class="card mt-5 col-6 m-auto shadow">
            <div class="card-header bg-danger text-light text-center">
                Hindi Typing Test (Kruti-Dev)
            </div>
            <div class="card-body">
                <div class="row g-3 align-items-center">
                    <div class="col-4 p-1">
                        <label for="" class="col-form-label">Enter Your Name</label>
                    </div>
                    <div class="col-8 p-1">
                        <input type="text" id="username" class="form-control">
                    </div>
                </div>


                <div class="row g-3 align-items-center">
                    <div class="col-4 p-1">
                        <label for="" class="col-form-label">Select Test Time</label>
                    </div>
                    <div class="col-8 p-1">
                        <select class="form-select" id="duration">
                            <option value="60">1 Minute</option>
                            <option value="120">2 Minute</option>
                            <option value="300">5 Minute</option>
                            <option value="600">10 Minute</option>
                        </select>

                    </div>
                </div>


                <div class="row g-3 align-items-center">
                    <div class="col-4 p-1">
                        <label for="" class="col-form-label">Select Paragraph</label>
                    </div>
                    <div class="col-8 p-1">
                        <select class="form-select" id="para">
                            <option value="1">Random Words</option>
                            <option value="2" style="font-family:hindi">आधार</option>

                            <option value="3" style="font-family:hindi">अलग्योझा</option>
                            <option value="4" style="font-family:hindi">अमृत</option>
                            <option value="5" style="font-family:hindi">अपनी करनी</option>


                        </select>

                    </div>
                </div>


                <div class="row g-3 align-items-center">
                    <div class="col-4 p-1">
                        <label for="" class="col-form-label">Set Word Limit</label>
                    </div>
                    <div class="col-8 p-1 d-flex">
                        <div class="p-2">
                            <input class="form-check-input" type="checkbox" value="" id="limiton">
                            <label class="form-check-label">
                                Enabled
                            </label>
                        </div>
                        <div class="p-2">
                            <input class="form-check-input" type="checkbox" value="" id="limitoff" checked>
                            <label class="form-check-label">
                                Disabled

                            </label>
                        </div>

                        <input type="number" id="limit" class="form-control" value="50" style="width:30%" disabled>


                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-4 p-1">
                        <label for="" class="col-form-label">Backspace</label>
                    </div>
                    <div class="col-8 p-1 d-flex">
                        <div class="p-2">
                            <input class="form-check-input" type="checkbox" value="" id="backon" checked>
                            <label class="form-check-label">
                                Enabled
                            </label>
                        </div>
                        <div class="p-2">
                            <input class="form-check-input" type="checkbox" value="" id="backoff">
                            <label class="form-check-label">
                                Disabled

                            </label>
                        </div>




                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-4 p-1">
                        <label for="" class="col-form-label">Highlight & Auto Scroll</label>
                    </div>
                    <div class="col-8 p-1 d-flex">
                        <div class="p-2">
                            <input class="form-check-input" type="checkbox" id="scrollon" value="" checked>
                            <label class="form-check-label">
                                Enabled
                            </label>
                        </div>
                        <div class="p-2">
                            <input class="form-check-input" type="checkbox" value="" id="scrolloff">
                            <label class="form-check-label">
                                Disabled

                            </label>
                        </div>




                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <button class="btn btn-outline-danger" id="start">Start Typing Test</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container tester" style="display:none">
        <div class="card mt-1 col-9 m-auto shadow">
            <div class="card-header bg-danger text-light text-center d-flex justify-content-evenly">
                <button class="btn btn-danger">GWPM <span class="gwpm">0.00</span></button>
                <button class="btn btn-danger">NWPM <span class="nwpm">0.00</span></button>
                <button class="btn btn-danger">ACCU <span class="acc">0</span>%</button>
                <button class="btn btn-danger">TIME <span class="time">00:00</span></button>
            </div>
            <div class="card-body">
                <div class="border p-2 overflow-auto bg-light" id="textbook" style="height:250px;font-size:20px;font-family:hindi"></div>
                <div class="bg-danger">
                    <button class="btn btn-danger">GWPM <span class="gwpm">0.00</span></button>
                    <button class="btn btn-danger">NWPM <span class="nwpm">0.00</span></button>
                    <button class="btn btn-danger">ACCU <span class="acc">0</span>%</button>
                    <button class="btn btn-danger">TIME <span class="time">00:00</span></button>

                    <button class="btn btn-sm btn-primary isize">+</button>
                    <span id="fsize">20</span>
                    <button class="btn btn-sm btn-primary dsize">-</button>

                </div>

                <div class="card border" style="height:250px">
                    <textarea style="height:100%;resize: none;border:none;outline:none;font-family:hindi" id="textcopy" class="p-2"></textarea>

                </div>
                <div class="mt-2">
                    <button class="btn btn-danger" id="subtest">Submit</button>
                    <button class="btn btn-danger" onclick="restarttest()">Restart</button>

                </div>
            </div>
        </div>
    </div>
    <div class="container result" style="display:none">
        <div class="card mt-3 col-9 m-auto shadow">
            <div class="card-header text-dark text-center" style="font-size:xx-large;">
                <b>TYPING TEST RESULT</b>
            </div>
            <div class="card-body">
                <table class='table'>
                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Name </span></td>
                        <td><input type="text" class="form-control" id="username" disabled></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td><span class="p-2">Accuracy in % </span></td>
                        <td><input type="text" class="form-control" id="accuracy" disabled></td>
                    </tr>

                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Time Duration </span></td>
                        <td> <input type="text" class="form-control" id="timeduration" disabled></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                        <td><span class="p-2">Net Speed (NWPM) </span></td>
                        <td> <input type="text" class="form-control" id="nwpm" disabled></td>
                    </tr>

                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Test Name </span></td>
                        <td><input type="text" class="form-control" id="testname" disabled></td>
                        <td></td>
                        <td><span class="p-2">Gross Speed (GWPM) </span></td>
                        <td><input type="text" class="form-control" id="gwpm" disabled></td>
                    </tr>
                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Incorrect Words </span></td>
                        <td><input type="text" class="form-control" id="wrongwords" disabled></td>
                        <td></td>
                        <td><span class="p-2">Total Keystrokes</span></td>
                        <td><input type="text" class="form-control" id="totalkey" disabled></td>
                    </tr>
                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Correct Words </span></td>
                        <td><input type="text" class="form-control" id="correctwords" disabled></td>
                        <td></td>
                        <td><span class="p-2">Typed Keystrokes </span></td>
                        <td><input type="text" class="form-control" id="typedkey" disabled></td>
                    </tr>
                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Total Typed Words </span></td>
                        <td><input type="text" class="form-control" id="totaltypedwords" disabled></td>
                        <td></td>
                        <td><span class="p-2">Remaining Keystrokes </span></td>
                        <td><input type="text" class="form-control" id="restkey" disabled></td>
                    </tr>
                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Total Words </span></td>
                        <td><input type="text" class="form-control" id="totalwords" disabled></td>
                        <td></td>
                        <td><span class="p-2">Actual Time Taken </span></td>
                        <td><input type="text" class="form-control" id="actualtimetaken" disabled></td>
                    </tr>
                    <tr class="" style="font-size: large;">
                        <td><span class="p-2">Remaining Words </span></td>
                        <td><input type="text" class="form-control" id="restwords" disabled></td>
                        <td></td>
                        <td><span class="p-2">Backspace Taken </span></td>
                        <td><input type="text" class="form-control" id="backspacecount" disabled></td>
                    </tr>
                </table>
                <button class="btn btn-danger" onclick="restarttest()">Retake Test</button>
            </div>
        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="logic.js"></script>
</body>

</html>