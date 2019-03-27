from rest_framework import routers
from .api import SaleViewSet

router = routers.DefaultRouter()
router.register('api/salestracker', SaleViewSet, 'salestracker')

urlpatterns = router.urls
