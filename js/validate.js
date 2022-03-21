
const regex = /\S+@\S+\.\S+/

$('.email').blur(function(){
	if(!regex.test(this.value)) {
		$('.email-err').html('Please enter a valid email address.')
		$(this).addClass('danger')
	}
	else{
		$('.email-err').html('')
		$(this).removeClass('danger')
	}
})
$('.password').blur(function(){
	if(this.value.trim().length===0) {
		$('.password-err').html('Please enter a password.')
		$(this).addClass('danger')
	}
	else{
		$('.password-err').html('')
		$(this).removeClass('danger')
	}
})
