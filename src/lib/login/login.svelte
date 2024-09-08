<script lang="ts">
	$: isFormValid = login.valid && password.valid;

	let login = {
		value: '',
		error: '',
		touched: false,
		valid: false
	};

	let password = {
		value: '',
		error: '',
		touched: false,
		valid: false
	};


	function validateLogin(event: Event) {
		login.touched = true;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		login.value = (event.target as HTMLInputElement).value;
		login.valid = emailRegex.test(login.value);

		if (!login.valid) {
			login.error = 'Invalid email address';
		} else {
			login.error = '';
		}
	}

	function validatePassword(event: Event) {
		password.touched = true;
		password.value = (event.target as HTMLInputElement).value;
		password.valid = password.value.length >= 6;

		if (!password.valid) {
			password.error = 'Password must be at least 6 characters long';
		} else {
			password.error = '';
		}
	}
</script>

<div>
	<section class="container">
		<h1>Welcome 👋</h1>

		<form method="POST">
			<fieldset>
				<input
					name="login"
					placeholder="Login"
					aria-label="Login"
					autocomplete="username"
					{...login.touched ? { 'aria-invalid': login.error ? 'true' : 'false' } : {}}
					aria-describedby="invalid-helper-username"
					required
					on:input={validateLogin}
				/>
				{#if login.touched && login.error}
					<small id="invalid-helper-username">{login.error}</small>
				{/if}
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					{...password.touched ? { 'aria-invalid': password.error ? 'true' : 'false' } : {}}
					aria-describedby="invalid-helper-password"
					required
					on:input={validatePassword}
				/>
				{#if password.touched && password.error}
					<small id="invalid-helper-password">{password.error}</small>
				{/if}

				<input
					type="submit"
					value="Log in"
					aria-disabled={!isFormValid}
					disabled={!isFormValid}
				/>
			</fieldset>
		</form>
	</section>

	<slot></slot>
	<!-- Para permitir contenido personalizado -->
</div>

<style>
	.container {
		width: 30%;
		margin-top: 5rem;
	}

	@media screen and (max-width: 768px) {
		.container {
			width: 80%;
			margin-top: 5rem;
		}
	}

	@media screen and (max-width: 480px) {
		.container {
			width: 95%;
			margin-top: 5rem;
		}
	}
</style>
