import {
  HomeIcon,
  CatalogIcon,
  CubesIcon,
  KeyIcon,
  ChartLineIcon,
  CogIcon,
  CommentsIcon,
  UsersIcon,
} from '@patternfly/react-icons';

import HomePage from '../pages/HomePage';
import ModelsPage from '../pages/ModelsPage';
import SubscriptionsPage from '../pages/SubscriptionsPage';
import ApiKeysPage from '../pages/ApiKeysPage';
import ChatbotPage from '../pages/ChatbotPage';
import UsagePage from '../pages/UsagePage';
import SettingsPage from '../pages/SettingsPage';
import UsersPage from '../pages/UsersPage';

import { AppConfig } from '../types/navigation';

export const appConfig: AppConfig = {
  appTitle: 'LiteMaaS',
  routes: [
    {
      id: 'main',
      label: 'Main',
      routes: [
        {
          id: 'home',
          path: '/home',
          element: HomePage,
          label: 'nav.home',
          icon: HomeIcon,
          exact: true,
        },
        {
          id: 'models',
          path: '/models',
          element: ModelsPage,
          label: 'nav.models',
          icon: CatalogIcon,
        },
        {
          id: 'subscriptions',
          path: '/subscriptions',
          element: SubscriptionsPage,
          label: 'nav.subscriptions',
          icon: CubesIcon,
        },
        {
          id: 'api-keys',
          path: '/api-keys',
          element: ApiKeysPage,
          label: 'nav.apiKeys',
          icon: KeyIcon,
        },
        {
          id: 'chatbot',
          path: '/chatbot',
          element: ChatbotPage,
          label: 'nav.chatbot',
          icon: CommentsIcon,
        },
        {
          id: 'usage',
          path: '/usage',
          element: UsagePage,
          label: 'nav.usage',
          icon: ChartLineIcon,
        },
      ],
    },
    {
      id: 'admin',
      label: 'Admin',
      routes: [
        {
          id: 'admin-users',
          path: '/admin/users',
          element: UsersPage,
          label: 'nav.admin.users',
          icon: UsersIcon,
          requiredRoles: ['admin', 'admin-readonly'],
        },
        {
          id: 'settings',
          path: '/admin/settings',
          element: SettingsPage,
          label: 'nav.admin.settings',
          icon: CogIcon,
        },
      ],
    },
  ],
  navigation: [
    {
      id: 'home',
      label: 'nav.home',
      path: '/home',
      icon: HomeIcon,
    },
    {
      id: 'models',
      label: 'nav.models',
      path: '/models',
      icon: CatalogIcon,
    },
    {
      id: 'subscriptions',
      label: 'nav.subscriptions',
      path: '/subscriptions',
      icon: CubesIcon,
    },
    {
      id: 'api-keys',
      label: 'nav.apiKeys',
      path: '/api-keys',
      icon: KeyIcon,
    },
    {
      id: 'chatbot',
      label: 'nav.chatbot',
      path: '/chatbot',
      icon: CommentsIcon,
    },
    {
      id: 'usage',
      label: 'nav.usage',
      path: '/usage',
      icon: ChartLineIcon,
    },
    // Admin separator
    {
      id: 'admin-separator',
      label: '',
      isGroup: true,
      requiredRoles: ['admin', 'admin-readonly'],
    },
    {
      id: 'admin-users',
      label: 'nav.admin.users',
      path: '/admin/users',
      icon: UsersIcon,
      requiredRoles: ['admin', 'admin-readonly'],
    },
    {
      id: 'settings',
      label: 'nav.admin.settings',
      path: '/admin/settings',
      icon: CogIcon,
      requiredRoles: ['admin', 'admin-readonly'],
    },
  ],
};
