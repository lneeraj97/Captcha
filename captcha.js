            var code;
            function generateCaptcha() {

                var a = Math.ceil((Math.random()) * 9);
                var b = Math.ceil((Math.random()) * 9);
                var c = Math.ceil((Math.random()) * 9);
                var d = Math.ceil((Math.random()) * 9);
                var e = Math.ceil((Math.random()) * 9);
                var f = Math.ceil((Math.random()) * 9);
                code = a.toString() + b.toString() + c.toString() + d.toString() + e.toString() + f.toString();
                document.getElementById('captcha').value = code;
                document.getElementById('capinput').value = '';

            }

            function evaluateCaptcha() {
                var ans = document.getElementById('captcha').value;
                var userans = document.getElementById('capinput').value;
                if (userans == ans) alert("You got it right");
                else alert("You got it wrong");

            }
