class User < ApplicationRecord 
    validates :email, :session_token, presence: true, uniqueness: true 
    # TODO: validate the password here 

    attr_reader :password

    after_initialize :ensure_session_token

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return user if user && user.is_password?(password)
        nil
    end    

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_pass = BCrypt::Password.new(self.password_digest)
        bcrypt_pass.is_password?(password)
    end     
    
    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end 
       
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end    