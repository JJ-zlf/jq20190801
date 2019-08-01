	$(function() {
				$('#myCarousel').carousel({
					interval: 2000
				});
			})

			$('input[id="username"]').focus(function() {
				$(this).next().text('用户名应该为2-20位之间').removeClass('state1').addClass('state2');
			}).blur(function() {
				if ($(this).val().length >= 2 && $(this).val().length <= 20 && $(this).val() != '') {

					$(this).next().text('输入成功').removeClass('state1').addClass('state4');
				} else {
					$(this).next().text('用户名应该为2-20位之间！！！').removeClass('state1').addClass('state3');
				}
			});


			//验证密码

			$('input[id="password"]').focus(function() {
				$(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state2');
			}).blur(function() {
				if ($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {
					$(this).next().text('输入成功').removeClass('state1').addClass('state4');
				} else {
					$(this).next().text('密码应该为6-20位之间！！！').removeClass('state1').addClass('state3');
				}
			});


			$("form").submit(function(e) {
				e.preventDefault();

				var username = $("#username").val();
				var password = $("#password").val();

				var obj = JSON.parse(localStorage.getItem(username))

				if (obj != null) {
					if (password == obj.password) {
						alert("成功");
						$(location).attr('href', 'GameStart.html');
					}
				}

			});
			var music = document.getElementById('music');
			$(".icon-yinxiang").click(function() {
				if (music.paused) {
					music.play();
					return;
				}

				music.pause();
			})

			var height = $(window).height();
			$('body').height(height);


			
