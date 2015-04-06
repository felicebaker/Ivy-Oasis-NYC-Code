"""
Django settings for myproject project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
#SECRET_KEY = '###################'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

TEMPLATE_DEBUG = False

ALLOWED_HOSTS = ['www.ivyoasisnyc.com','ivyoasisnyc.com']


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.admindocs',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'events_section',
    'aboutphotos',
    'missionphotos',
    'views',
    'partnerships',
    'bios',
    'memberinfo',
    'featureeventspeakerbios',
    'sponsors',
    'tinymce',
    'mediacoverage'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'myproject.urls'

WSGI_APPLICATION = 'myproject.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '###########',
        'USER': '###########',
        'PASSWORD': '############',
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'EST'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'

ADMINS = ('Felice Baker', 'felicebaker2009@u.northwestern.edu')

#EMAIL_HOST = 'smtp.webfaction.com'
#EMAIL_HOST_USER = '##########'
#EMAIL_HOST_PASSWORD = '##########'
#DEFAULT_FROM_EMAIL = 'felicebaker@felicebaker.webfactional.com'
#SERVER_EMAIL = 'felicebaker@felicebaker.webfactional.com'


EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = '###########'
EMAIL_HOST_PASSWORD = '#############'
#EMAIL_HOST_PASSWORD = '###############'


#EMAIL_HOST = 'smtp.example.com'
#EMAIL_PORT = 25
#EMAIL_HOST_USER = 'mailer@example.com'
#EMAIL_HOST_PASSWORD = 'password'
#EMAIL_USE_TLS = True

STATICFILES_DIRS = (
    '/home/felicebaker/webapps/ivyoasisnyc/myproject/static/',
)



STATIC_ROOT = '/home/felicebaker/webapps/ivyoasisnyc_static/'

TEMPLATE_DIRS = (
    "/home/felicebaker/webapps/ivyoasisnyc/myproject/templates/",
    "/home/felicebaker/webapps/ivyoasisnyc/myproject/templates/ivyoasisnyc/",
)

MEDIA_ROOT = '/home/felicebaker/webapps/ivyoasisnyc/myproject/media/'

MEDIA_URL = '/media/'

TEMPLATE_CONTEXT_PROCESSORS = (
    "django.contrib.auth.context_processors.auth",
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.static",
    "django.core.context_processors.tz",
    "django.contrib.messages.context_processors.messages",
    "django.core.context_processors.request",
)
